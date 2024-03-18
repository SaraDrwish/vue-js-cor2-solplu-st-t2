<template>
    <div class="HelpForm">
        <form >
            <label >your name:</label>
            <input type="text" placeholder="yourname">
            <label >your issue:</label>
            <textarea placeholder="enter your messege" cols="30" rows="10"></textarea>
            <input type="button" value="ask for help">
        </form>
    </div>
</template>


<script>
export default {
    name:'HelpForm',
}
</script>  

<style scoped lang="scss" >
form , .HelpForm{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
    background: rgb(65, 77, 48);
    color: rgb(54, 88, 88);
    font-size: 22px
}
</style>