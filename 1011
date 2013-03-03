var ASM_NAME = "push";
var INSTRUCTION_FORMAT = "B";
function commandExec(param) {
	emu.storeWord(1, emu.loadReg(param[0]));
	emu.storeReg(1, emu.loadReg(1)+1);
	emu.incrementProgramCounter(1);
}
