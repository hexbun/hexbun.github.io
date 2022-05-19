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

<section id="about-me" class="about-me" class:animate-in={isInView}>
    <div class="section-title" use:inview={options} on:change={handleScrollChange}>About Me</div>
    <div class="content">
        <div class="description">
            <p>I've loved programming ever since my dad introduced me to the <a href="https://www.arduino.cc/">Arduino</a> when I was 11 years old. It's funny how seeing something as simple as an LED being turned on and off by the power of code can start an avalanche of curiosity which led me to where I am today.</p>
            <p>Today, I'm a student at the <a href="https://www.kent.ac.uk/">University of Kent</a> studying computer science with AI and doing my year in industry with <a href="https://www.edwardsvacuum.com/">Edwards Vacuum</a>. I am working as part of the UI team, creating the new standard for Edwards pump monitoring technology.</p>
            <p>When I'm not writing code, I like to dabble in the art of <span>origami</span>, catch up on some <span>reading</span>, and test my patience with <span>cooking</span>.</p>
        </div>
        <div class="image">
            <img src="rabbit.svg" alt="rabbit" />
        </div>
    </div>
</section>

<style type="text/scss">
    @import '../vars';

    .about-me {
        opacity: 0;  

        .content {
            display: flex;
            flex-direction: column;

            .image {
                img {
                    width: 50vw;
                }

                @media only screen and (min-width: 768px) and (max-width: 1023px) {
                    img {
                        width: 30vw;
                    }
                }

                @media only screen and (min-width: 1024px) and (max-width: 1199px) {
                    img {
                        width: 20vw;
                    }
                }
            }
        }

        .description {
            margin-bottom: 2rem;

            p {
                margin-bottom: 1rem;
                font-size: 14pt;
            }

            span {
                color: $action-color;
            }
        }

        .image {
            text-align: center;
        }

        @media only screen and (min-width: 1200px) {
            .content {
                flex-direction: row;

                .image {
                    img {
                        width: 14vw;
                    }
                }
            }
        }
    }
</style>