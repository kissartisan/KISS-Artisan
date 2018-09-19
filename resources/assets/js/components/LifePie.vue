<script>
import { Pie } from 'vue-chartjs';

export default {
    extends: Pie,
    mounted () {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: ['Coding', 'Eating', 'Hitting the gym', 'Socializing'],
            datasets: [
                {
                    label: 'My life in a nutshell',
                    backgroundColor:  ["#249F0C", "#0E62DF","#F32929","#D3EF15"],
                    data: [40, 20, 30, 10]
                }
            ]
        }, {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'My life in a nutshell'
            }
        })
    }
}
</script>