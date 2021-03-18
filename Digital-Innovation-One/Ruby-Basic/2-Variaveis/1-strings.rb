# Strings

texto = "Só sei que nada sei"

outroTexto = "Morar-nesse-país-é-como-ter-a-mãe-na-zona"

nome = "Leandro Mariotti"

puts texto.split # Apenas reparte
puts outroTexto.split("-") # Reparte tirando o hífen

p nome.chars # retorna cada letra separada num array
p nome[-1] # retorna a ultima letra
p nome[2]
p nome[5-9]

numero = 7

puts "o número é %03d" % numero # formatando a string para exibir 3 digitos

lugar = "  bali  " 
outroLugar = "nassau"

p lugar.strip # Tirando espaços em branco de uma string
p outroLugar.capitalize # Primeira letra maiuscula 
p outroLugar.gsub("nassau", "Bora Bora") # Substitui o conteudo

