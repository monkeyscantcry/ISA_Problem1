var ASM_NAME = "pop";
var INSTRUCTION_FORMAT = "B";
function commandExec(param) {
	emu.storeReg(param[0], emu.loadWord(emu.loadReg(1)));
	emu.incrementProgramCounter(1);
}
