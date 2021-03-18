# Verificar se a palavra é palíndromo

# Objetivo: 
# Definir uma método para ver se é polindromo
# Imprimir se é palindromo ou não


def palindromo?(palavra)
    
    palavra.downcase == palavra.downcase.reverse
   
end

puts palindromo?("ovo")
puts palindromo?("Radar")
puts palindromo?("foo")

linguagem = "ruby"
linguagem ||= "javascript"

puts linguagem