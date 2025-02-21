"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface EmployeeInterface {
    id: number,
    name: string,
    salary: number,
    role: string
}

const EmployeeDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [emp, setEmp] = useState<EmployeeInterface | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const res = await fetch('/employees.json')
                const data = await res.json();
                const employeeByID = data.employees.find((employee: EmployeeInterface) => employee.id === Number(id));

                setEmp(employeeByID);

            } catch (error) {
                console.error("Error fetching employee:", error);
            }
        };

        fetchProduct();
    }, [id]);


    return emp ?(

        <div >
            <div className="max-w-4xl mx-auto mt-10 p-4">
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
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2 text-center">{emp.id}</td>
              <td className="border border-gray-300 p-2">{emp.name}</td>
              <td className="border border-gray-300 p-2">{emp.salary}</td>
              <td className="border border-gray-300 p-2 text-center">{emp.role}</td>
            </tr>
        </tbody>
      </table>
      
      
    </div>
        </div>
    ):null;
};

export default EmployeeDetail;
