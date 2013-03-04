var ASM_NAME = "return";
var INSTRUCTION_FORMAT = "C";
function commandExec(param) {
	var val = emu.loadReg(2);
	if (param[1]===1) {
		val += emu.loadReg(param[0]);
	}
	emu.storeReg(2, val);
	emu.incrementProgramCounter(1);
}
