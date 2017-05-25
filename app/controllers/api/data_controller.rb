class Api::DataController < ApplicationController
  def index
    raw_data = Log_data.all
    @unique_words = Log_data.transform(raw_data)
    render :index
  end
end
