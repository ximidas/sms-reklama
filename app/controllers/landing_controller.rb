class LandingController < ApplicationController

  def index

    @prop_to_vue = 'Variable from Rails View'
    @colors = %w[gray-800 pink-700 teal-500 teal-800 blue-700 blue-800 blue-900 indigo-700 indigo-800 black indigo-900 purple-600 purple-700 purple-800 purple-900 pink-600 gray-600 red-900 yellow-700 green-600 green-800 green-900 orange-700].sample
    render 'landing/index'
  end


end
