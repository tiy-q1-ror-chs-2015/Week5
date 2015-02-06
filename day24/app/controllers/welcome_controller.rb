class WelcomeController < ApplicationController
  def index
    @gladiators = Gladiator.all
  end
end
