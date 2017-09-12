require 'rails_helper'

RSpec.describe "diaries/edit", type: :view do
  before(:each) do
    @diary = assign(:diary, Diary.create!(
      :title => "MyString",
      :body => "MyText"
    ))
  end

  it "renders the edit diary form" do
    render

    assert_select "form[action=?][method=?]", diary_path(@diary), "post" do

      assert_select "input[name=?]", "diary[title]"

      assert_select "textarea[name=?]", "diary[body]"
    end
  end
end
