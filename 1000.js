var ASM_NAME = "setArg";
var INSTRUCTION_FORMAT = "C";
function commandExec(param) {
	var val = emu.loadReg(param[0]);
	val += param[1];
	emu.storeReg(6+param[2], val);
	emu.incrementProgramCounter(1);
}
