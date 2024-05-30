
  // JavaScript function to display confirmation message
  function showConfirmation() {
      alert("Ordered Successfully!");
  }
  function showconfo(){
    alert("Added to cart");
  }
  document.querySelectorAll('.read-more-btn').forEach(button => {
          button.addEventListener('click', () => {
              const moreContent = button.previousElementSibling;
              if (moreContent.classList.contains('d-none')) {
                  moreContent.classList.remove('d-none');
                  button.textContent = 'Read less';
              } else {
                  moreContent.classList.add('d-none');
                  button.textContent = 'Read more';
              }
          });
      });
 
