module Api
  class ListingsController < ApplicationController
  
    def show
      @listing = Listing.find_by(list_id: params[:id], show_id: params[:show_id])
      render json: @listing
    end
    
    def destroy
      @listing = Listing.find_by(list_id: params[:id], show_id: params[:show_id])
      if @listing.destroy
        render json: @listing
      else
        render json: @listing.errors
      end
    end
    
    def create
      @listing = Listing.new(listing_params)
      if @listing.save
        render json: @listing
      else
        render json: @listing.errors
      end
    end
  
    private
    def listing_params
      params.require(:listing).permit(:list_id, :show_id)
    end
  
  end
  
end
