const element = document.querySelector("#container_livros");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});

<script>
    function voltarInicio() {
        window.history.back()
    }
</script>