input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    basic.showString("L")
    OLED.writeStringNewLine(RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR) + "-" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH) + "-" + RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY) + "-" + " " + RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND))
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("A")
    OLED.writeStringNewLine("Knopf A")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("B")
    OLED.writeStringNewLine("Knopf B")
})
OLED.init(128, 64)
RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 50)
RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 12)
RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 11)
RTC_DS1307.setTime(RTC_DS1307.TimeType.DAY, 9)
RTC_DS1307.setTime(RTC_DS1307.TimeType.MONTH, 2)
RTC_DS1307.setTime(RTC_DS1307.TimeType.YEAR, 2025)
