// Valida o banco de situações/cartas (formato, sorte x azar, texto x efeito). Uso: node scripts/check-bank.js [-v]
// Sai com código 1 se achar erro, para o build do APK não sair com dados quebrados.
const fs=require('fs'),ROOT=require('path').join(__dirname,'..');global.window=global;global.SITUACOES=[];
const files=fs.readdirSync(ROOT).filter(f=>/^banco.*\.js$/.test(f)).sort((a,b)=>a==='banco.js'?-1:b==='banco.js'?1:a.localeCompare(b));
for(const f of files)try{eval(fs.readFileSync(ROOT+'/'+f,'utf8'))}catch(e){console.log('ERRO em',f,e.message);process.exit(1)}
const money=e=>{let m=0;(e.match(/([+–]) R\$ ([\d.]+)/g)||[]).forEach(x=>{const mm=/([+–]) R\$ ([\d.]+)/.exec(x);m+=(mm[1]==='+'?1:-1)*parseInt(mm[2].replace(/\./g,''))});return m};
const mv=e=>{let m=/Avance (\d+)/.exec(e);if(m)return +m[1];m=/Volte (\d+)/.exec(e);return m?-m[1]:0};
const prob=[],titles={};let outs=0,g=0;
const chk=(r,ctx)=>{outs++;if(r.g)g++;const m=money(r.eff),v=mv(r.eff),perde=/Perca/.test(r.eff),again=/Jogue/.test(r.eff);
 if(r.g&&(m<0||v<0||perde))prob.push('SORTE com perda: '+ctx+' → '+r.x+' ['+r.eff+']');
 if(!r.g&&(m>0||v>0||again))prob.push('AZAR com ganho: '+ctx+' → '+r.x+' ['+r.eff+']');
 if(!r.g&&r.eff==='Nada muda')prob.push('AZAR sem efeito: '+ctx+' → '+r.x);
 if(r.g&&r.eff==='Nada muda')prob.push('SORTE sem efeito: '+ctx+' → '+r.x);
 if(r.x.length>150)prob.push('texto longo: '+ctx+' → '+r.x.slice(0,50));};
for(const s of SITUACOES){titles[s.t]=(titles[s.t]||0)+1;if(s.x.length>170)prob.push('situação longa: '+s.t);for(const o of s.opts)for(const r of o.r)chk(r,s.t+' / '+o.l)}
for(const c of (global.DIRETAS||[]))chk(c,'CARTA '+c.t);
const dup=Object.entries(titles).filter(([k,v])=>v>1).map(([k,v])=>k+'×'+v);
console.log({situacoes:SITUACOES.length,diretas:(global.DIRETAS||[]).length,desfechos:outs,sorte:g,azar:outs-g,titulosRepetidos:dup});
if(process.argv[2]==='-v')prob.forEach(p=>console.log(p));else console.log('problemas:',prob.length,'(use -v)');
// valores em R$ citados no texto devem bater com o efeito em dinheiro (base)
const num=t=>{const out=[];t.replace(/R\$ ?(\d[\d.]*)( milhões| milhão| mil)?/g,(m,n,u)=>{let v=parseFloat(n.replace(/\./g,''));if(u===' mil')v*=1000;else if(u)v*=1e6;out.push(v)});return out};
const mism=[];
const chk2=(r,ctx)=>{const t=num(r.x);const m=Math.abs(money(r.eff));if(t.length&&m&&!t.includes(m))mism.push(ctx+' → "'+r.x+'" ['+r.eff+']')};
for(const s of SITUACOES)for(const o of s.opts)for(const r of o.r)chk2(r,s.t);
for(const c of (global.DIRETAS||[]))chk2(c,'CARTA '+c.t);
console.log('texto x efeito divergentes:',mism.length);
if(process.argv[2]==='-v')mism.forEach(p=>console.log(p));

const erros=prob.filter(p=>/^(SORTE com perda|AZAR com ganho|AZAR sem efeito|SORTE sem efeito)/.test(p));
if(erros.length||dup.length||mism.length){console.log('FALHOU: '+erros.length+' incoerência(s), '+dup.length+' título(s) repetido(s), '+mism.length+' texto(s) divergente(s)');erros.slice(0,20).forEach(p=>console.log(p));process.exit(1)}
console.log('banco ok');
