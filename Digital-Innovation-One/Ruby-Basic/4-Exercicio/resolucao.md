# Verificar se a palavra é palíndromo

### Objetivo: 
### Definir uma método para ver se é polindromo
### Imprimir se é palindromo ou não

## Resolução

* Observação: o ponto de interrogação nesse método significa que é uma pergunta e por isso retornará true or false

def palindromo?(palavra)
    
    palavra.downcase == palavra.downcase.reverse
   
end

puts palindromo?("ovo")
puts palindromo?("foo")