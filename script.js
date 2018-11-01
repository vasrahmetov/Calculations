var factorial
var fact = function(chislo) {
     factorial = 1
     for (i = 1; i<=chislo;i++) {
     	factorial = factorial * i
     }
    
     
     return factorial
}

  
  
     var iskom = document.querySelector(".iskomoe")
     var knopka = document.querySelector(".otprav")
     var z = document.querySelector(".fieldfield")
     var f = document.createElement("span")
z.appendChild(f)
     knopka.addEventListener ("click", function(event) {

     event.preventDefault()	
 

var x = document.querySelector(".iskomoe").value
    
    
    f.textContent = fact(x)
    console.log(textContent(f))

     })



var factor = function (chislo) {
	var posled = []
	var fctrial = 1
	for (i = 1; i <= chislo; i++) {
		posled.push(i)
	}
	for (i = 0; i < posled.length; i++) {
		 fctrial = fctrial * posled[i]
	}
	return fctrial
}




var squareX = function (a, b, c) {
	var discr = (b * b) - (4 * a * c)
	var x1
	var x2
	var reshenia = []
	if (discr < 0) {
		console.log("Уравнение не имеет решения в вещественных числах")
	}
	if (discr === 0) {
		console.log("Уравнение имеет одно решение")
		x1 = ((0-b) + Math.sqrt(discr)) / (2 * a)
		return "Решение уравнения равно " + x1

	}
	if (discr > 0) {
		console.log("Уравнение имеет два решения")
		x1 = ((0-b) - Math.sqrt(discr)) / (2 * a)
		x2 = ((0-b) + Math.sqrt(discr)) / (2 * a)
		reshenia.push(x1, x2)
		return "Решения уравнения равны: " + reshenia[0] + ", " + reshenia[1] + "."
	}
	
}


var okno = document.querySelector(".fieldsquare")
var buttonUr = document.querySelector(".searchKorni")
var lr = document.createElement("span")
okno.appendChild(lr)

buttonUr.addEventListener ("click", function(event) {
	event.preventDefault()
	var w = document.querySelector(".koefA").value
	var yz = document.querySelector(".coefB").value
	var z = document.querySelector(".koefC").value
	lr.textContent = squareX (w, yz, z)
}
)








var stepenFunc = function(osnovanie, pokazatel) {
  var stepen = osnovanie
  if (pokazatel > 0) {
    
    for (var i = 1; i < pokazatel; i++) {
    
    osnovanie = osnovanie * stepen
    
    }
    
  }
  else if (pokazatel < 0) {
    for (i = 1; i < 0 - pokazatel; i++){
      osnovanie = osnovanie * stepen
      
      
      }
    osnovanie = 1 / osnovanie
     
  }
    
  var result = osnovanie
  if (pokazatel === 0) {
     result = 1 }
  return result
  
  
  }


 var oknoStep =  document.querySelector(".fieldStepen")
 var outputs = document.createElement("span")
 var vichislenie = document.querySelector(".vichisl")
 oknoStep.appendChild(outputs)

vichislenie.addEventListener("click", function(event) {

event.preventDefault()
var x = document.querySelector(".osnovanie").value
var y = document.querySelector(".pokazatel").value
outputs.textContent = stepenFunc(x, y)


}
	)
















var razlozhenie = function(chislo) {
var a
var mnozhitel
var mnozhiteli = []
for (var i = 2; i <= chislo / 2; i++) {
 	a = chislo / i

 	
 	
 	if (a % 1 === 0) {
 		mnozhitel = a
 		mnozhiteli.push(mnozhitel)
 	}

} 
   return mnozhiteli
}
console.log(razlozhenie(100))


var factorize = function(n) {
var arr = [];

while(n%2 == 0) {
arr.push(2);
n = n/2;
}

for(i = 3; i*i <= n; i += 2) {
if(n%i == 0) {
arr.push(i); 
n = n/i;
i -= 2;
}
}
arr.push(n);
return arr;
}


		var oknoFactorize = document.querySelector(".fieldFactorize")
		var cnopka = document.querySelector(".buttonFctrze")
		var textOkno1 = document.createElement("span")
		var textOkno2 = document.createElement("div")
		oknoFactorize.appendChild(textOkno1)
		oknoFactorize.appendChild(textOkno2)
		textOkno2.classList.add("factorize-result")

		cnopka.addEventListener("click", function(event) {
			event.preventDefault()
			var x = document.querySelector(".razlozhimoe").value
			textOkno1.textContent = ("Простые множители числа: ")

			textOkno2.textContent = predstav(x)



		}





			)

		var predstav = function(n) {

			var x = factorize(n)
		var	strok = " * "
		var stroka = ""
			for (i = 0; i<x.length; i++){
				stroka = stroka + x[i] + strok 

			}
			return stroka
}

function NoD(a,b) {
  while(a%b > 0 || b%a > 0) {
    if (a > b) {
      a = a % b
      }
  
    else if (b > a) {
      b = b % a}
    }
    
   
  return a + b
}
 
 var buttonNoD = document.querySelector(".NoDbutton")
 var otvetfield = document.querySelector(".result1")
 

 buttonNoD.addEventListener("click", function(event) {
 	event.preventDefault()
 	var x = document.querySelector(".var1").value
 	var y = document.querySelector(".var2").value
    
 	otvetfield.textContent = NoD(x,y)

 }


 	)

