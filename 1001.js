var ASM_NAME = "jumpOrInitFp";
var INSTRUCTION_FORMAT = "D";
function commandExec(param) {
	if (param[1]===0) {
		emu.storeReg(0, emu.getProgramCounter()+1);
		emu.setProgramCounter(param[0]);
	} else {
		emu.storeReg(1, 200);
		emu.incrementProgramCounter(1);
	}
}
