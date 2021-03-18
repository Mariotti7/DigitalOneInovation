require 'colorize'

def colors
    puts "I am now red".red
    puts "I am now blue".blue
    puts "Testing".yellow
end

numero_da_sorte = 7

mensagem = <<~MENSAGEM
    Seu número é #{numero_da_sorte}
MENSAGEM

puts mensagem.green

colors
numero_da_sorte