const Atendimentos = require('./Atendimentos');
const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');

Atendimentos.belongsTo(Pacientes, {
    foreignKey: 'paciente_id'
})

Atendimentos.belongsTo(Psicologos, {
    foreignKey: 'psicologo_id'
})

module.exports = {
    Atendimentos,
    Psicologos,
    Pacientes
}