<script lang="ts">
</script>

<section class="intro">
    <p class="header-hi"><span>👋</span> Hi, my name is</p>
    <p class="header-name">Alex Betts</p>
    <p class="header-description">
        <span>I'm a software developer, a student at <a href="https://www.kent.ac.uk/">UKC</a>, and a&nbsp;</span>
        <span class="flip-container">
            <span class="flip">origamist 🐦</span>
            <span class="flip">rustacean 🦀</span>
            <span class="flip">rabbit owner 🐇</span>
            <span class="flip">gamer 🎮</span>
            <span class="flip">maker 🪛</span>
        </span>
    </p>
</section>

<style type="text/scss">
    @import '../vars';

    .intro {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;

        p {
            opacity: 0;
            animation-duration: 1s;
            animation-name: fade-up-in;
            animation-fill-mode: forwards;
        }

        @for $i from 1 through 3 {
            :nth-child(#{$i}n) {
                animation-delay: #{$i * 100}ms;
            }
        }
    }

    .header-hi {
        color: $action-color;
        font-family: JetBrains-Mono;
        font-size: 4vw;

        span {
            font-size: 4vw;
        }
    }

    .header-name {
        color: white;
        font-size: 11vw;
        font-weight: 700;
        font-family: JetBrains-Mono;
        padding: 1rem 0;
    }

    .header-description {
        font-size: 8vw;
        line-height: 3.1rem;

        .flip-container {
            white-space: nowrap;
            display: block;
            height: 36px;
            width: 100%;

            .flip {
                position: absolute;
                opacity: 0;
                animation: flip-word 15s linear infinite;
            }

            @for $i from 2 through 5 {
                :nth-child(#{$i}n) {
                    animation-delay: #{($i - 1) * 3}s;
                }
            }   
        }
    }

    @keyframes fade-up-in {
        0% {
            opacity: 0;
            transform: translateY(40px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @keyframes flip-word {
        0% {
            opacity: 0;
        }
        1% {
            transform: translateY(-20px);
        }
        4% {
            opacity: 0;
        }
        5% {
            opacity: 1;
            transform: translateY(0px);
        }
        17% {
            opacity: 1;
            transform: translateY(0px);
        }
        19% {
            opacity: 0;
        }
        20% {
            transform: translateY(20px);
        }
        100% {
            opacity: 0;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        section {
            width: 60vw;
        }

        .header-hi {
            font-size: 16pt;
            
            span {
                font-size: 20pt;
            }
        }

        .header-name {
            font-size: 6vw;
        }

        .header-description {
            font-size: 3.5vw;
            
            .flip-container {
                display: inline;
            }
        }
    }

    @media only screen and (min-width: 1024px) and (max-width: 1199px) {
        section {
            width: 60vw;
        }

        .header-hi {
            font-size: 16pt;
            
            span {
                font-size: 20pt;
            }
        }

        .header-name {
            font-size: 6vw;
        }

        .header-description {
            font-size: 3.5vw;
            line-height: 1.2;
        
            .flip-container {
                height: 59px;
                display: inline;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        section {
            width: 50vw;
        }

        .header-hi {
            font-size: 16pt;
            
            span {
                font-size: 20pt;
            }
        }

        .header-name {
            font-size: 5.5vw;
        }

        .header-description {
            font-size: 2.8vw;
            line-height: 1.2;
        
            .flip-container {
                height: 55px;
                display: inline;
            }
        }
    }
</style>