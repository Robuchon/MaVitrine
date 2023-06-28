<template>
    <div>
        <template>
            <InputText
                v-model=""
                :label=""
                :placeholder=""
                :error=""
            />
        </template>
        
        <script>
        import InputText from '@/components/InputText';
        
        export default {
            name: 'InputTextComponent',
            components: {
                InputText,
            },
            data() {
                return {
                    : '',
                };
            },
        };
        </script>
        
        <style scoped>
        </style>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>