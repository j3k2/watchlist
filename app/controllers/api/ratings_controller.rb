module Api
  class RatingsController < ApplicationController
  
    def show
      @rating = Rating.find_by(user_id: params[:id], show_id: params[:show_id])
      render json: @rating
    end
    
    
    def destroy
      @rating = Rating.find_by(user_id: params[:id], show_id: params[:show_id])
      if @rating.destroy
        render json: @rating
      else
        render json: @rating.errors
      end
    end
    
    def create
      @rating = Rating.new(rating_params)
      if @rating.save
        render json: @rating
      else
        render json: @rating.errors
      end
    end
    
    def update
      @rating = Rating.find_by(user_id: params[:id], show_id: params[:show_id])
      if @rating
        @rating.update!(rating_params)
        render json: @rating
      else
        render json: 'Unprocessable'
      end
    end
  
    private
    def rating_params
      params.require(:rating).permit(:user_id, :show_id, :value)
    end
  
  
  end
end
