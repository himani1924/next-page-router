'use client'
import React, { useEffect, useState } from 'react'


interface employee{
    id: number,
    name: string,
    salary: number,
    role: string
}
const About = () => {
    const [employee, setEmployee] = useState<employee[]>([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const result = await fetch('./employees.json')
                const res = await result.json()
                setEmployee(res.employees)
                
            }
            catch(err){
                console.error(err)
            }
        }
        fetchData()
    },[])
  return (
    <div className='my-20'>
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Company Overview</h2>
          <p className="mt-4 text-gray-700">
            We are a leading provider of innovative solutions in the tech industry. Our mission is to
            empower businesses and individuals to achieve more with cutting-edge products and services.
            Founded in 2010, our company has consistently delivered high-quality products that are trusted
            by thousands of customers worldwide.
          </p>
        </section>
        <div className="max-w-4xl mx-auto  p-4">
      <h1 className="text-3xl font-bold text-center my-6">Employee data</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Salary</th>
            <th className="border border-gray-300 p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {employee.map(({ id, name, salary, role }) => (
            <tr key={id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2 text-center">{id}</td>
              <td className="border border-gray-300 p-2">{name}</td>
              <td className="border border-gray-300 p-2">{salary}</td>
              <td className="border border-gray-300 p-2 text-center">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
    </div>
    </div>
  )
}

export default About