class Api::DiariesController < Api::ApplicationController
  before_action :set_diary, only: [:show, :edit, :update, :destroy]

  # GET /diaries
  # GET /diaries.json
  def index
      diaries = Diary.offset(params[:page].to_i*10).limit(10)
      size =  Diary.all.size

      render json: {diaries: diaries, size: size}
  end

  # GET /diaries/1
  # GET /diaries/1.json
  def show
    render json: @diary
  end

  # GET /diaries/new
  def new
    @diary = Diary.new
    render json: @diary
  end

  # GET /diaries/1/edit
  def edit
    render json: @diary
  end

  # POST /diaries
  # POST /diaries.json
  def create
    @diary = Diary.new(diary_params)

    if @diary.save
      render :json, status: :created, location: @diary
    else
      render json: @diary.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /diaries/1
  # PATCH/PUT /diaries/1.json
  def update
    if @diary.update(diary_params)
      render :json, status: :ok, location: @diary
    else
      render json: @diary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /diaries/1
  # DELETE /diaries/1.json
  def destroy
    @diary.destroy
    render json: (head :no_content)
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_diary
    @diary = Diary.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def diary_params
    params.require(:diary).permit(:title, :body)
  end
end
