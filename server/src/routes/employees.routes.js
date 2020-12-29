const { Router } = require('express')
const router = Router()

const employeeCtrl = require('../controllers/employees.controller.js')
router.get('/', employeeCtrl.getEmployees);
router.post('/', employeeCtrl.createEmployee);
router.get('/:id', employeeCtrl.getEmployeeOne);
router.put('/:id', employeeCtrl.editEmployee);
router.delete('/:id', employeeCtrl.deleteEmployee);
module.exports= router