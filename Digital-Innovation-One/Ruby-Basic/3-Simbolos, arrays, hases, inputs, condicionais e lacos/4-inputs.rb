puts "Digite seu nome"

nome = gets

puts "Seu nome é #{nome}"

# loop
def laco
    valor = 0
    while valor < 10
        break if valor == 7
        puts "O valor é #{valor}"
        valor += 1
    end
end


# for
def para 
    for i in 0..5
        next if i == 3
        puts "Volta #{i}"
    end
end


lista = [0, 1, 2, 3, 4, 5]

lista.each do |meu_valor| 
    puts "Meu valor usando o each é #{meu_valor}"
end

laco
para