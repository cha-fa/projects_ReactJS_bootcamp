import "./styles.css";
import "./styles.scss";
import dayjs from 'dayjs';


console.log(dayjs().format('MMMM DD YYYY')); // January 18 2021
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY')); // 08/01/2021
console.log(process.env.DB_HOST, "coucou la variable")
