

const employeeCtrl ={}

const Employee= require('../models/Employee')

employeeCtrl.getEmployees=async(req,res)=> {
    const employees = await Employee.find()
    res.json(employees)
}
employeeCtrl.getEmployeeOne=async(req,res)=> {
    // console.log(req.params)
    //Employee.findOne({_id: req.params.id})
   const employee = await Employee.findById(req.params.id)
    res.send(employee)
   
}
employeeCtrl.createEmployee= async(req,res)=> {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: 'Created'})
}
employeeCtrl.editEmployee= async(req,res)=> {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee updated'})
}


employeeCtrl.deleteEmployee=async(req,res)=> {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee deleted'})
}
module.exports = employeeCtrl;