var ASM_NAME = "storeToZero";
var INSTRUCTION_FORMAT = "B";
function commandExec {
	emu.storeWord(0, emu.loadReg(param[0]));
	emu.incrementProgramCounter(1);
}
