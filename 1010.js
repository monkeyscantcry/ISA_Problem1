var ASM_NAME = "skipIfNotOne";
var INSTRUCTION_FORMAT = "D";
function commandExec(param) {
	if (param[1]===0 && emu.loadReg(6)!==1) {
		emu.setProgramCounter(param[0]);
	} else if (param[1]===1 && emu.loadReg(7)!==1) {
		emu.setProgramCounter(param[0]);
	} else {
		emu.incrementProgramCounter(1);
	}
}
