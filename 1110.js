var ASM_NAME = "setReturn";
var INSTRUCTION_FORMAT = "C";
function commandExec(param) {
	var val = emu.loadReg(2);
	if (param[1]===1) {
		val += emu.LoadReg(param[0]);
	}
	emu.setReg(2, val);
	emu.incrementProgramCounter(1);
}
