# Métodos

## Saber o email do usuário logado

-> Em home_controller.rb

    class HomeController < ApplicationController
      def index
        @email = user_signed_in? ? current_user.email : 'Stranger'
      end
    end

-> Em index.html.erb

    <%= @email %>
