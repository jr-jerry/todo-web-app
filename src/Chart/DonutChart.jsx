import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { ThemeContext } from '../context/ThemeContext';

ChartJS.register(ArcElement, Tooltip, Legend);
function DonutChart() {
    const { todo, todoCompleted } = useContext(TodoContext);

    if(todo.length==0 && todoCompleted.length==0){
        return <div>Add task to show graph</div>
    }
    const {theme}=useContext(ThemeContext);
    const data = {
        labels: ['InCompleted', 'Completed'],
        datasets: [
            {
                data: [todo.length, todoCompleted.length],
                backgroundColor: [theme=='light'?'#3f9142':'#a0eda4',theme=='light'?'#a0eda4':'#3f9142'],
                borderColor: [theme=='light'?'#3f9142':'#a0eda4',theme=='light'?'#a0eda4':'#3f9142'],
                borderWidth: 1,


            }
        ]
    }
    const options = {
        cutout: '70%',
        plugins: {
            legend: { display: true ,position:"bottom",align:"center", labels:{useBorderRadius:true,boxWidth:10}},
            tooltip: { enabled: true },
        }
    }

    return (
        <div className={`w-[90%] h-[90%]`}>
            <Doughnut data={data} options={options} />

        </div>
    )
}
export default DonutChart;