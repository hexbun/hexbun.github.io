<script lang="ts">    
    import { inview } from 'svelte-inview';

    import workHistory from '../assets/work.json';

    let isInView;
    const options = {
        rootMargin: '-150px',
        unobserveOnEnter: true
    }

    function handleScrollChange({ detail }) {
        isInView = detail.inView;
    }

    let selectedTab = 1;
    let workContent = workHistory.history[0];

    function changeTab(id) {
        selectedTab = id;
        workContent = workHistory.history[id - 1];
    }
</script>

<section id="work-history" class="work-history" class:animate-in={isInView}>
    <div class="section-title" use:inview={options} on:change={handleScrollChange}>Work History</div>
    <div class="table">
        <div class="tabs">
            {#each workHistory.history as work}
               <button class={work.id === selectedTab ? 'tab active' : 'tab'} on:click={() => changeTab(work.id)}>{work.company}</button>   
            {/each}
        </div>
        <div class="content">
            <div class="title">{workContent.title}</div>
            <div class="company-duration">
                <a class="company" href={workContent.url}>{workContent.company}</a>
                <span class="separator">•</span>
                <span class="duration">{workContent.duration}</span>
            </div>
            <div class="details">
                <ul>
                    {#each workContent.details as detail}
                        <li class="detail">{detail}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>

<style type="text/scss">
    @import '../vars';

    .work-history {
        opacity: 0;

        .table {
            overflow: hidden;
        
            .tabs {
                display: flex;
                margin-bottom: 2rem;
                white-space: nowrap;
                overflow-x: scroll;
            }

            .tabs::-webkit-scrollbar-thumb {
                background: transparent;
            }

            .tab {
                background-color: transparent;
                border: none;
                border-bottom: 2px $font-color solid;
                padding: 1rem;
                color: $font-color;
                transition: all 0.5s;
            }

            .tab:active, .tab:hover, .tab.active {
                border-color: $action-color;
                color: $action-color;
                background-color: $primary-color-offset;
            }

            .content {
                div {
                    padding-bottom: 0.5rem;
                }

                .title {
                    font-size: 18pt;
                    font-weight: bold;
                }

                .company-duration {
                    font-family: JetBrains-Mono;
                    font-size: 10pt;
                    margin-bottom: 1rem;
                }

                .details {
                    min-height: 30vh;

                    .detail {
                        list-style: none;
                        margin-bottom: 1rem;
                    }

                    .detail::before {
                        content: "◆";
                        color: $action-color;
                        margin-left: -2rem;
                        display: inline-block;
                        width: 2rem;
                    }
                }
            }
        }
    }
</style>