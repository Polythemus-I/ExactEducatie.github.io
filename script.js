@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.portfolio-item, .testimonial {
    animation: fadeIn 1s ease-in-out;
}

