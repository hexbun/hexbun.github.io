<script lang="ts">
    let showDrawer = false;

    function close() {
        showDrawer = false;
    }
</script>

<div class="nav-drawer">
    <div class="nav-button">
        <img src="menu.svg" alt="Menu" on:click={() => showDrawer = true} />
    </div>
    <div class="links" class:show-drawer={showDrawer}>
        <div class="top-bar">
            <img src="close.svg" alt="Close" on:click={close} class:animate-in={showDrawer} />
            <div class="socials">
                <a href="https://github.com/hexbun/">
                    <img src="tech/github.svg" alt="GitHub" class:animate-in={showDrawer} />
                </a>
                <a href="https://www.linkedin.com/in/alex-betts-1a98b9167/">
                    <img src="tech/linkedin.svg" alt="LinkedIn" class:animate-in={showDrawer} />
                </a>
            </div>
        </div>
        <div class="list" on:click={close}>
            <a href="#about-me" class:animate-in={showDrawer}>About Me</a>
            <a href="#technologies" class:animate-in={showDrawer}>Technologies</a>
            <a href="#work-history" class:animate-in={showDrawer}>Work History</a>
        </div>
    </div>
</div>

<style type="text/scss">
    @import '../vars';

    .nav-drawer {
        img {
            filter: invert(88%) sepia(16%) saturate(7112%) hue-rotate(329deg) brightness(104%) contrast(92%);
        }

        .top-bar {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;
        }
    

        .links {
            position: fixed;
            height: 100vh;
            width: 100vw;
            background-color: $primary-color;
            transition: transform 200ms linear;
            transform: translateY(100%);
            z-index: 1;

            img {
                width: 30px;
                margin-left: 10px;
                margin-top: 10px;
                opacity: 0;
                animation-delay: 250ms;
            }

            .list {
                padding-top: 2rem;
                text-align: center;
                display: flex;
                flex-direction: column;

                a {
                    font-size: 24pt;
                    list-style: none;
                    margin-bottom: 2rem;
                    opacity: 0;
                }

                @for $i from 1 through 3 {
                    :nth-child(#{$i}n) {
                        animation-delay: #{250 + $i * 50}ms;
                    }
                }
            }
        }

        .show-drawer {
            transform: translateX(0%);
        }

        .nav-button {
            position: fixed;
            top: 25px;
            right: 25px;
            z-index: 1;

            img {
                width: 30px;
            }
        }

        .socials img {
            width: 40px;
        }

        .socials {
            margin-right: 1rem;
        }
    }
</style>

