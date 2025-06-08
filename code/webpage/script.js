// CSV data (hardcoded from the Taipei Bike Lane Survey)
const surveyData = [
    // Row 1
    {
        frequency: "Weekly",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Morning rush hour",
        accident: "No",
        safetyRating: "4",
        concerns: "Poor road conditions",
        improvement: "Better road maintenance",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Female",
        age: "18-24"
    },
    // Row 2
    {
        frequency: "Monthly",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Afternoon",
        accident: "No",
        safetyRating: "4",
        concerns: "Reckless drivers",
        improvement: "More traffic signs for cyclists",
        useApp: "Maybe",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Female",
        age: "25-34"
    },
    // Row 3
    {
        frequency: "Daily",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Random times",
        accident: "Maybe",
        safetyRating: "3",
        concerns: "Reckless drivers",
        improvement: "Stricter traffic laws",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "Taipei",
        gender: "Male",
        age: "25-34"
    },
    // Row 4
    {
        frequency: "Weekly",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Night",
        accident: "No",
        safetyRating: "5",
        concerns: "Not enough bike lanes",
        improvement: "More bike lanes",
        useApp: "Yes",
        appFeature: "Real-time hazard alerts",
        origin: "Taipei",
        gender: "Female",
        age: "18-24"
    },
    // Row 5
    {
        frequency: "Weekly",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Morning rush hour",
        accident: "No",
        safetyRating: "5",
        concerns: "Not enough bike lanes",
        improvement: "Better road maintenance",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Female",
        age: "25-34"
    },
    // Row 6
    {
        frequency: "Daily",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Evening rush hour",
        accident: "Maybe",
        safetyRating: "3",
        concerns: "Not enough bike lanes",
        improvement: "More bike lanes",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Female",
        age: "25-34"
    },
    // Row 7
    {
        frequency: "Rarely",
        reason: "For exhibitions",
        bikeType: "YouBike",
        timeOfDay: "Morning rush hour",
        accident: "No",
        safetyRating: "1",
        concerns: "Not enough bike lanes",
        improvement: "More bike lanes",
        useApp: "Maybe",
        appFeature: "Route recommendations",
        origin: "Other Taiwanese City",
        gender: "Other",
        age: "25-34"
    },
    // Row 8
    {
        frequency: "Rarely",
        reason: "For fun",
        bikeType: "YouBike",
        timeOfDay: "Afternoon",
        accident: "No",
        safetyRating: "5",
        concerns: "Traffic congestion",
        improvement: "More bike lanes",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Female",
        age: "18-24"
    },
    // Row 9
    {
        frequency: "Weekly",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Afternoon",
        accident: "No",
        safetyRating: "3",
        concerns: "Traffic congestion",
        improvement: "More traffic signs for cyclists",
        useApp: "Maybe",
        appFeature: "Real-time hazard alerts",
        origin: "International",
        gender: "Female",
        age: "18-24"
    },
    // Row 10
    {
        frequency: "Weekly",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Afternoon",
        accident: "Yes",
        safetyRating: "4",
        concerns: "Not enough bike lanes",
        improvement: "More bike lanes",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Male",
        age: "25-34"
    },
    // Additional data points to represent the survey results
    {
        frequency: "Daily",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Morning rush hour",
        accident: "No",
        safetyRating: "4",
        concerns: "Reckless drivers",
        improvement: "More bike lanes",
        useApp: "Maybe",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Male",
        age: "25-34"
    },
    {
        frequency: "Daily",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Evening rush hour",
        accident: "No",
        safetyRating: "3",
        concerns: "Not enough bike lanes",
        improvement: "More bike lanes",
        useApp: "Yes",
        appFeature: "Real-time hazard alerts",
        origin: "Other Taiwanese City",
        gender: "Female",
        age: "18-24"
    },
    {
        frequency: "Rarely",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Night",
        accident: "No",
        safetyRating: "1",
        concerns: "Not enough bike lanes",
        improvement: "More bike lanes",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "Taipei",
        gender: "Female",
        age: "18-24"
    },
    {
        frequency: "Monthly",
        reason: "Exercise",
        bikeType: "YouBike",
        timeOfDay: "Night",
        accident: "No",
        safetyRating: "5",
        concerns: "Poor visibility at night",
        improvement: "More traffic signs for cyclists",
        useApp: "Maybe",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Female",
        age: "25-34"
    },
    {
        frequency: "Monthly",
        reason: "For fun",
        bikeType: "YouBike",
        timeOfDay: "Afternoon",
        accident: "No",
        safetyRating: "2",
        concerns: "Not enough bike lanes",
        improvement: "Better road maintenance",
        useApp: "Maybe",
        appFeature: "Accident heatmaps",
        origin: "Taipei",
        gender: "Female",
        age: "18-24"
    },
    {
        frequency: "Weekly",
        reason: "For fun",
        bikeType: "YouBike",
        timeOfDay: "Night",
        accident: "No",
        safetyRating: "1",
        concerns: "All of the above",
        improvement: "More bike lanes",
        useApp: "Maybe",
        appFeature: "Real-time hazard alerts",
        origin: "Other Taiwanese City",
        gender: "Male",
        age: "18-24"
    },
    {
        frequency: "Monthly",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Night",
        accident: "No",
        safetyRating: "3",
        concerns: "Traffic congestion",
        improvement: "More bike lanes",
        useApp: "Maybe",
        appFeature: "Alternative paths",
        origin: "Taipei",
        gender: "Female",
        age: "25-34"
    },
    {
        frequency: "Daily",
        reason: "All reasons",
        bikeType: "Your own bicycle",
        timeOfDay: "Every time needed",
        accident: "No",
        safetyRating: "5",
        concerns: "Reckless drivers",
        improvement: "Pedestrians getting off bike lanes",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Male",
        age: "25-34"
    },
    {
        frequency: "Rarely",
        reason: "Exercise",
        bikeType: "YouBike",
        timeOfDay: "Afternoon",
        accident: "Maybe",
        safetyRating: "3",
        concerns: "Poor road conditions",
        improvement: "More traffic signs for cyclists",
        useApp: "Yes",
        appFeature: "Accident heatmaps",
        origin: "Taipei",
        gender: "Male",
        age: "25-34"
    },
    {
        frequency: "Monthly",
        reason: "Commuting",
        bikeType: "YouBike",
        timeOfDay: "Morning rush hour",
        accident: "Maybe",
        safetyRating: "4",
        concerns: "Not enough bike lanes",
        improvement: "More bike lanes",
        useApp: "Yes",
        appFeature: "Route recommendations",
        origin: "International",
        gender: "Female",
        age: "18-24"
    }
];

// Chart colors - Updated with the new design system colors
const colors = {
    primary: '#2c5282',
    primaryLight: '#4a69bd',
    primaryDark: '#1e3a8a',
    accent: '#f59e0b',
    accentLight: '#fbbf24',
    accentDark: '#d97706',
    neutral1: '#64748b',
    neutral2: '#94a3b8',
    neutral3: '#cbd5e1',
    success: '#059669',
    danger: '#dc2626'
};

// Store chart instances by canvas ID
const chartInstances = {};

// Common chart options with enhanced styling
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                    family: "'Montserrat', sans-serif",
                    size: 12
                }
            },
            // Disable legend click toggling
            onClick: function() { return; }
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: colors.primaryDark,
            bodyColor: colors.primary,
            bodyFont: {
                family: "'Montserrat', sans-serif"
            },
            titleFont: {
                family: "'Playfair Display', serif",
                weight: 'bold'
            },
            borderColor: colors.primaryLight,
            borderWidth: 1,
            padding: 12,
            boxPadding: 5,
            usePointStyle: true,
            callbacks: {
                labelPointStyle: function(context) {
                    return {
                        pointStyle: 'circle',
                        rotation: 0
                    };
                }
            }
        }
    },
    animation: {
        duration: 2000,
        easing: 'easeOutQuart'
    }
};

// Function to count occurrences of values in an array
function countOccurrences(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

// Enhanced bar chart with animations and better styling
function createBarChart(canvasId, labels, data, label) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    // Destroy previous chart if exists
    if (chartInstances[canvasId]) {
        chartInstances[canvasId].destroy();
    }
    chartInstances[canvasId] = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: [
                    colors.primaryLight,
                    colors.primary,
                    colors.primaryDark,
                    colors.accent,
                    colors.accentLight,
                    colors.accentDark
                ],
                borderColor: 'rgba(255, 255, 255, 0.8)',
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
                hoverOffset: 10
            }]
        },
        options: {
            ...chartOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(200, 200, 200, 0.2)'
                    },
                    ticks: {
                        font: {
                            family: "'Montserrat', sans-serif",
                            size: 11
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: "'Montserrat', sans-serif",
                            size: 11
                        },
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// Enhanced pie chart with better visuals
function createPieChart(canvasId, labels, data, label) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    if (chartInstances[canvasId]) {
        chartInstances[canvasId].destroy();
    }
    chartInstances[canvasId] = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: [
                    colors.primary,
                    colors.accent,
                    colors.accentLight,
                    colors.primaryLight,
                    colors.primaryDark,
                    colors.accentDark,
                    colors.neutral1,
                    colors.neutral2
                ],
                borderColor: 'rgba(255, 255, 255, 0.8)',
                borderWidth: 2,
                hoverOffset: 15
            }]
        },
        options: {
            ...chartOptions,
            cutout: '0%'
        }
    });
}

// Enhanced doughnut chart
function createDoughnutChart(canvasId, labels, data, label) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    if (chartInstances[canvasId]) {
        chartInstances[canvasId].destroy();
    }
    chartInstances[canvasId] = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: [
                    colors.primary,
                    colors.accent,
                    colors.primaryLight,
                    colors.accentLight,
                    colors.primaryDark
                ],
                borderColor: 'rgba(255, 255, 255, 0.8)',
                borderWidth: 2,
                hoverOffset: 15
            }]
        },
        options: {
            ...chartOptions,
            cutout: '60%'
        }
    });
}

// Radar chart function (kept for potential future use)
function createRadarChart(canvasId, labels, data, label) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    if (chartInstances[canvasId]) {
        chartInstances[canvasId].destroy();
    }
    chartInstances[canvasId] = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: `${colors.primary}4D`, // with transparency
                borderColor: colors.primary,
                borderWidth: 2,
                pointBackgroundColor: colors.primary,
                pointRadius: 4
            }]
        },
        options: chartOptions
    });
}

// Process data for each chart
function loadCharts(tabId = null) {
    // If the tab system is active, only process charts in the active tab
    const container = tabId ? document.getElementById(tabId) : document;

    // 1. Frequency chart (bar)
    if (document.getElementById('frequencyChart')) {
        const frequencyData = surveyData.map(d => d.frequency);
        const frequencyCounts = countOccurrences(frequencyData);
        createBarChart(
            'frequencyChart',
            Object.keys(frequencyCounts),
            Object.values(frequencyCounts),
            'Number of respondents'
        );
    }

    // 2. Reasons chart (pie)
    if (document.getElementById('reasonsChart')) {
        const reasonsData = surveyData.map(d => d.reason);
        const reasonsCounts = countOccurrences(reasonsData);
        createPieChart(
            'reasonsChart',
            Object.keys(reasonsCounts),
            Object.values(reasonsCounts),
            'Reasons for riding'
        );
    }

    // 3. Safety rating chart (bar)
    if (document.getElementById('safetyChart')) {
        const safetyData = surveyData.map(d => d.safetyRating);
        const safetyCounts = countOccurrences(safetyData);
        const safetyLabels = ['1 (Not safe)', '2', '3', '4', '5 (Very safe)'];
        const safetyValues = safetyLabels.map(label => 
            safetyCounts[label.charAt(0)] || 0
        );
        createBarChart(
            'safetyChart',
            safetyLabels,
            safetyValues,
            'Safety perception (1-5 scale)'
        );
    }

    // 4. Concerns chart (pie)
    if (document.getElementById('concernsChart')) {
        const concernsData = surveyData.map(d => d.concerns);
        const concernsCounts = countOccurrences(concernsData);
        createPieChart(
            'concernsChart',
            Object.keys(concernsCounts),
            Object.values(concernsCounts),
            'Biggest concerns'
        );
    }

    // 5. Improvements chart (bar)
    if (document.getElementById('improvementsChart')) {
        const improvementsData = surveyData.map(d => d.improvement);
        const improvementsCounts = countOccurrences(improvementsData);
        createBarChart(
            'improvementsChart',
            Object.keys(improvementsCounts),
            Object.values(improvementsCounts),
            'Suggested improvements'
        );
    }

    // 6. App usage chart (doughnut)
    if (document.getElementById('appUsageChart')) {
        const appUsageData = surveyData.map(d => d.useApp);
        const appUsageCounts = countOccurrences(appUsageData);
        createDoughnutChart(
            'appUsageChart',
            Object.keys(appUsageCounts),
            Object.values(appUsageCounts),
            'Would use a safety navigation app'
        );
    }

    // 7. Age chart (doughnut)
    if (document.getElementById('ageChart')) {
        const ageData = surveyData.map(d => d.age);
        const ageCounts = countOccurrences(ageData);
        createDoughnutChart(
            'ageChart',
            Object.keys(ageCounts),
            Object.values(ageCounts),
            'Age groups'
        );
    }

    // 8. Gender chart (pie)
    if (document.getElementById('genderChart')) {
        const genderData = surveyData.map(d => d.gender);
        const genderCounts = countOccurrences(genderData);
        createPieChart(
            'genderChart',
            Object.keys(genderCounts),
            Object.values(genderCounts),
            'Gender distribution'
        );
    }

    // 9. Origin chart (doughnut)
    if (document.getElementById('originChart')) {
        const originData = surveyData.map(d => d.origin);
        const originCounts = countOccurrences(originData);
        createDoughnutChart(
            'originChart',
            Object.keys(originCounts),
            Object.values(originCounts),
            'Origin of respondents'
        );
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Always render all charts if their canvas exists
    setTimeout(() => {
        loadCharts();
    }, 500);

    // Tab click event handling (for tabbed charts)
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = `${button.getAttribute('data-tab')}-tab`;
                // Hide all tab panes
                document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
                // Show the selected tab pane
                document.getElementById(tabId).classList.add('active');
                // Optionally, re-render charts in the new tab
                loadCharts(tabId);
            });
        });
    }
});

// Initialize the Speed Risk Chart
document.addEventListener('DOMContentLoaded', function() {
    // Only create chart if element exists
    if(document.getElementById('speedRiskChart')) {
        const ctx = document.getElementById('speedRiskChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Low (<15 km/h)', 'Medium (15-25 km/h)', 'High (>25 km/h)'],
                datasets: [{
                    label: 'Crash Rate (%)',
                    data: [9.1, 18.2, 72.7],
                    backgroundColor: [
                        'rgba(101, 163, 13, 0.7)',
                        'rgba(217, 119, 6, 0.7)',
                        'rgba(220, 38, 38, 0.7)'
                    ],
                    borderColor: [
                        'rgb(101, 163, 13)',
                        'rgb(217, 119, 6)',
                        'rgb(220, 38, 38)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Crash Rate (%)'
                        }
                    }
                }
            }
        });
    }
});

// Enhanced interactivity
Chart.defaults.elements.arc.hoverOffset = 15;
Chart.defaults.datasets.bar.maxBarThickness = 40;
Chart.defaults.font.family = "'Montserrat', sans-serif";