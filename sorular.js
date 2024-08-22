function Soru(soruMetni,cevaplar,doğruCevap){
    this.soruMetni=soruMetni;
    this.cevaplar=cevaplar;
    this.doğruCevap=doğruCevap;
    
}
Soru.prototype.cevabiKontrolEt=function(cevap){
    return cevap ===this.doğruCevap
};
let sorular =[
    new Soru("1-)Hangisi JavaScript paket yönetim uyglumasıdır?",{ a:"Node.js",b:"TypeScript",c:"Npm",d:"java"},"c"),
    new Soru("2-)Hangisi .Net paket yönetim uyglumasıdır?",{ a:"Node.js",b:"Nuget",c:"Npm"},"b"),
    new Soru("3-)Hangisi JavaScript paket yönetim uyglumasıdır?",{ a:"Node.js",b:"java",c:"Npm"},"c"),
    new Soru("4-)Hangisi JavaScript paket yönetim uyglumasıdır?",{ a:"Node.js",b:"css",c:"Npm"},"c"),

]