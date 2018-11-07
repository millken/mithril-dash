import "./styles.scss"

export default function() {

    var count = 0; // added a variable
    
    return {
        view: function() {
            return (
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
            );
        },
    };
}