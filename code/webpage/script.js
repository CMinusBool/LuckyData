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
        const frequencyLabels = ["Daily", "Weekly", "Rarely", "Monthly", "Never"];
        const frequencyValues = [10, 10, 10, 7, 1];
        createBarChart(
            'frequencyChart',
            frequencyLabels,
            frequencyValues,
            'Number of respondents'
        );
    }

    // 2. Reasons chart (pie)
    if (document.getElementById('reasonsChart')) {
        const reasonsLabels = ["Commuting", "For fun", "Exercise", "For exhibitions", "All of the above"];
        const reasonsValues = [24, 7, 5, 1, 1];
        createPieChart(
            'reasonsChart',
            reasonsLabels,
            reasonsValues,
            'Reasons for riding'
        );
    }

    // 3. Safety rating chart (bar)
    if (document.getElementById('safetyChart')) {
        const safetyLabels = ['1 (Not safe)', '2', '3', '4', '5 (Very safe)'];
        const safetyValues = [3, 6, 9, 13, 7];
        createBarChart(
            'safetyChart',
            safetyLabels,
            safetyValues,
            'Safety perception (1-5 scale)'
        );
    }

    // 4. Concerns chart (pie)
    if (document.getElementById('concernsChart')) {
        const concernsLabels = ["Not enough bike lanes", "Reckless drivers", "Traffic congestion", "Poor road conditions", "Poor visibility at night", "All of the above", "Pedestrians on bike lanes"];
        const concernsValues = [14, 12, 6, 2, 2, 1, 1];
        createPieChart(
            'concernsChart',
            concernsLabels,
            concernsValues,
            'Biggest concerns'
        );
    }

    // 5. Improvements chart (bar)
    if (document.getElementById('improvementsChart')) {
        const improvementsLabels = ["More bike lanes", "More traffic signs for cyclists", "Better road maintenance", "Stricter traffic laws", "Pedestrians getting off bike lanes"];
        const improvementsValues = [19, 7, 6, 5, 1];
        createBarChart(
            'improvementsChart',
            improvementsLabels,
            improvementsValues,
            'Suggested improvements'
        );
    }

    // 6. App usage chart (doughnut)
    if (document.getElementById('appUsageChart')) {
        const appUsageLabels = ["Yes", "Maybe", "No"];
        const appUsageValues = [22, 14, 2];
        createDoughnutChart(
            'appUsageChart',
            appUsageLabels,
            appUsageValues,
            'Would use a safety navigation app'
        );
    }

    // 7. Age chart (doughnut)
    if (document.getElementById('ageChart')) {
        const ageLabels = ["25-34", "18-24", "35-44", "45-54"];
        const ageValues = [19, 16, 3, 1];
        createDoughnutChart(
            'ageChart',
            ageLabels,
            ageValues,
            'Age groups'
        );
    }

    // 8. Gender chart (pie)
    if (document.getElementById('genderChart')) {
        const genderLabels = ["Female", "Male", "Other"];
        const genderValues = [22, 15, 1];
        createPieChart(
            'genderChart',
            genderLabels,
            genderValues,
            'Gender distribution'
        );
    }

    // 9. Origin chart (doughnut)
    if (document.getElementById('originChart')) {
        const originLabels = ["International", "Taipei", "Other Taiwanese City"];
        const originValues = [21, 10, 7];
        createDoughnutChart(
            'originChart',
            originLabels,
            originValues,
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

 // Initialize AOS animation library
 document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Loading screen animation
    setTimeout(function() {
        document.querySelector('.loading-screen').classList.add('loaded');
        document.body.classList.add('loaded');
    }, 1500);
    
    // Mobile navigation toggle
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            mainNav.classList.remove('active');
            mobileToggle.classList.remove('active');
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScrollY = 0;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Add shadow and background when scrolled
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll direction
        if (scrollY > lastScrollY && scrollY > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollY = scrollY;
    });

    // Problem slider functionality
    const sliderContainer = document.querySelector('.problem-slider-container');
    if (sliderContainer) {
        const slider = sliderContainer.querySelector('.problem-slider');
        const slides = slider.querySelectorAll('.problem-slide');
        const nextBtn = sliderContainer.querySelector('.slider-btn.next');
        const prevBtn = sliderContainer.querySelector('.slider-btn.prev');
        const dotsContainer = sliderContainer.querySelector('.slider-dots');
        let currentSlide = 0;
        let slideInterval;

        // Create dots
        slides.forEach((slide, index) => {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            dot.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });
        
        const dots = dotsContainer.querySelectorAll('.slider-dot');

        function showSlide(n) {
            currentSlide = (n + slides.length) % slides.length;
            
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev', 'next');
                
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                } else if (index === (currentSlide + 1) % slides.length) {
                    slide.classList.add('next');
                }
            });

            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        function stopInterval() {
            clearInterval(slideInterval);
        }

        // Auto-play functionality
        function startInterval() {
            stopInterval(); // Prevent multiple intervals
            slideInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 7000); // Change slide every 7 seconds
        }

        function resetInterval() {
            stopInterval();
            startInterval();
        }

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
            resetInterval();
        });
        
        // Initial setup - show first slide, but don't start interval yet.
        showSlide(0);

        // Intersection Observer to start/stop slider when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startInterval();
                } else {
                    stopInterval();
                }
            });
        }, { threshold: 0.5 }); // Start when 50% of element is visible

        observer.observe(sliderContainer);
    }
});

// Enhanced interactivity
Chart.defaults.elements.arc.hoverOffset = 15;
Chart.defaults.datasets.bar.maxBarThickness = 40;
Chart.defaults.font.family = "'Montserrat', sans-serif";