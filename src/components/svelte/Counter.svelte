<script lang="ts">
    import { counterValue } from "@/stores";

    type Props = {
        startWith?: number;
        class?: string;
    };

    const { startWith, class:className } : Props = $props();
    
    if (startWith) {
        counterValue.set(startWith);
    }

</script>

<div class={className ? className : null}>
    <div class="text-7xl font-bold my-6">{$counterValue}</div>

    <button
        class="h-10 px-5 m-2 text-neutral-100 transition-colors duration-150 bg-[#FF3E00] rounded-lg focus:shadow-outline hover:bg-[#FF1300]"
        onclick={() => counterValue.set($counterValue + 1)}>
        Increment via Svelte
    </button>
</div>