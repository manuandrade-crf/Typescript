var computador;
var outro;
computador = new LapTop(14);
outro = new LapTop(21);
computador.ligarMonitor();
console.log("o tamanho da tela \u00E9 de ".concat(computador.tela, " polegadas"));
console.log("o tamanho da tela \u00E9 de ".concat(outro.tela, " polegadas"));
var lenovo;
lenovo = new LeNovo();
lenovo.ligarMonitor();
lenovo.aumentarBrilho(4);
var ibm;
ibm: Ibm;
ibm = new Ibm(12);
ibm.memoriaDeVideo = 512;
ibm.ligarMonitor();
console.log("Meu laptop tem ".concat(ibm.memoriaDeVideo, " de memoria de video"));