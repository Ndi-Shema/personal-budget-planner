import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { AppContext } from '../context/AppContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
    const { expenses } = useContext(AppContext);

    const data = {
        labels: expenses.map(expense => expense.category),
        datasets: [
            {
                label: 'Expenses',
                data: expenses.map(expense => expense.cost),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', // Red
                    'rgba(54, 162, 235, 0.2)', // Blue
                    'rgba(255, 206, 86, 0.2)', // Yellow
                    'rgba(75, 192, 192, 0.2)', // Teal
                    'rgba(153, 102, 255, 0.2)', // Purple
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', // Red
                    'rgba(54, 162, 235, 1)', // Blue
                    'rgba(255, 206, 86, 1)', // Yellow
                    'rgba(75, 192, 192, 1)', // Teal
                    'rgba(153, 102, 255, 1)', // Purple
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow custom size
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw || 0;
                        const total = expenses.reduce((sum, expense) => sum + expense.cost, 0);
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${label}: £${value} (${percentage}%)`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}> {/* Centering the chart */}
            <div style={{ width: '50%', height: '100%' }}> {/* Set desired size here */}
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default ExpenseChart;
