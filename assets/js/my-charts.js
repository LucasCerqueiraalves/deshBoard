const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: 'Traffic Source',
            data: [1200, 1900, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
               
            ],
            
        }]    
    },
    options: {
       responsive: true,
    }
});

const earning = document.getElementById('earning').getContext('2d');
const myyChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        datasets: [{
            label: 'Ganho',
            data: [1200, 1900, 3500, 5000, 205, 335, 6800, 7000, 1000, 500, 850, 898, 400],
            backgroundColor: [
                'rgba(255, 157, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 147, 64, 1)',
                'rgba(144,0,0, 1)',
                'rgba(22,250,0, 1)',
                'rgba(139,69,19, 1)',
                'rgba(75,0,130, 1)',
                'rgba(255,20,147, 1)',
                'rgba(128,0,0, 1)'
            ],
           
        }]
    },
    options: {
        responsive: true,
    }
});