<script lang="ts">
    import { inview } from 'svelte-inview';

    let isInView;
    const options = {
        rootMargin: '-150px',
        unobserveOnEnter: true
    }

    function handleScrollChange({ detail }) {
        isInView = detail.inView;
    }
</script>

<section id="technologies" class="technologies" class:animate-in={isInView}>
    <div class="section-title" use:inview={options} on:change={handleScrollChange}>Technologies I Love</div>
    <div class="grid">
        <img title="Rust" src="tech/rust.svg" alt="Rust" />
        <img title="Svelte" src="tech/svelte.svg" alt="Svelte" />
        <img title="Typescript" src="tech/typescript.svg" alt="Typescript" />
        <img title="HTML 5" src="tech/html.svg" alt="HTML 5" />
        <img title="CSS 3" src="tech/css.svg" alt="CSS 3" />
        <img title="Git" src="tech/git.svg" alt="Git" />
        <img title="Sass" src="tech/sass.svg" alt="Sass" />
        <img title="React" src="tech/react.svg" alt="React" />
        <img title="Flutter" src="tech/flutter.svg" alt="Flutter" />
        <img title="Python" src="tech/python.svg" alt="Python" />
    </div>
</section>

<style type="text/scss">
    .technologies {
        opacity: 0;

        .grid {
            display: grid;
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
            grid-template-rows: 1fr 1fr;
            align-items: center;
            justify-items: center;
            margin: 0 auto;

            img {
                filter: invert(88%) sepia(16%) saturate(7112%) hue-rotate(329deg) brightness(104%) contrast(92%);
                width: 50px;
                margin-bottom: 1rem;
            }
        }

        @media only screen and (min-width: 768px) and (max-width: 1023px) {
            .grid {
                img {
                    width: 5rem;
                }
            }
        }

        @media only screen and (min-width: 1024px) and (max-width: 1199px) {
            .grid {
                img {
                    width: 6rem;
                }
            }
        }

        @media only screen and (min-width: 1200px) {
            .grid {
                img {
                    width: 6rem;
                }
            }
        }
    }
</style>