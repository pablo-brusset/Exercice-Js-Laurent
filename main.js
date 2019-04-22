/*function addElement() {
    // crée un nouvel élément div 
    var div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.background="red";
    document.getElementById("cadre").appendChild(div)*/



$(function () {

            $("#creer").click(function () { // creer 
                var color;
                switch ($("#input").val()) {
                    case "bleu":
                        color = "bleu";
                        break;
                    case "rouge":
                        color = "rouge";
                        break;
                    case "vert":
                        color = "vert";
                        break;
                    default:
                        color = "jaune";
                        break;
                }
                var div = $("<div></div>").css("width", "50px").css("height", "50px").addClass(color);
                $("#cadre").append(div);
            });

            $("#supprimer").click(function () {
                var color = $("#input").val(); // Suprime la couleur entrer 
                $("#cadre div").remove("." + color);
            });

            $("#detruire").click(function () { // detruit tout 
                $("#cadre div").remove();
            })

            $("#ecrire").click(function () {
                var enter = $("#input").val();
                $("#cadre div").text(enter);

            })
            $("#vider").click(function () {
                $("#cadre div").html("");
            })
            $("#shake").click(function () {
                $("#cadre div").effect("shake", {
                    times: 4
                }, 2000);
            })

            $("#cadre").on("click", ".rouge",function () {
                    $(this).hide('explode', 2000);
                })

            $("#cadre").on("mouseover", ".vert",function () {
                    $(this).css("background", " blue");
                })
            $("#cadre").on("click",".jaune", function() {
                $(this).css("transition-delay", "2s");
                $(this).css("background","red");
            })

            $('#cadre').on('dblclick','div', function(){
                var nbrcase =$(this).attr('class')
                var recupinfo =$("."+nbrcase).length
                $('.modal').dialog ({
                modal:true,
                title:`Il y a ${recupinfo}  carrés ${nbrcase}`
                })
            })
            });