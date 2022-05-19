<script lang="ts">
</script>

<nav class="navbar">
    <div class="socials">
        <a href="https://github.com/hexbun/">
            <img src="tech/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/alex-betts-1a98b9167/">
            <img src="tech/linkedin.svg" alt="LinkedIn" />
        </a>
    </div>
    <div class="links">
        <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#work-history">Work History</a></li>
        </ul>
    </div>
</nav>

<style type="text/scss">
    @import '../vars';

    .navbar {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
        z-index: 1;
        background-color: $primary-color;
        height: clamp(60px, 12vh, 75px);

        .socials {
            margin-left: 1rem;

            a {
                margin-left: 0.5rem;
            }
        }

        img {
            width: 40px;
            filter: invert(88%) sepia(16%) saturate(7112%) hue-rotate(329deg) brightness(104%) contrast(92%);
        }

        img:hover {
            filter: invert(100%);
        }

        .links {
            margin-right: 2rem;
            height: 100%;
            transform: translateX(0);

            ul {
                margin-top: 0;
                margin-bottom: 0;
                display: flex;
                align-items: center;
                height: 100%;

                li {
                    margin: 0 1rem;
                    font-family: JetBrains-Mono;
                    list-style: none;
                }
            }
        }
    }

</style>