import { useState } from "react";

import { Button, Flex, Span, Switch, Text } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { AiFillSound } from "react-icons/ai";
import { MdOutlineNotifications, MdVibration } from "react-icons/md";

import { App } from "@/@singleton/App";
import { usePromiseLikeBottomSheetModal } from "@/shared/utils/hooks/use-promise-like-bottom-sheet-modal";

// TODO: говнокод
type SOUND_SETTING_ITEM_PROPS = {
  name: string;
  title: string;
  getIsChecked: () => boolean;
  icon: ReactNode;
  onChange: (isChecked: boolean) => void;
};
const cacheValues = {
  vibration: {
    value: App.getInstance().settings.vibrate.isEnabled,
    onChange: (isChecked: boolean) =>
      (App.getInstance().settings.vibrate.isEnabled = isChecked),
  },
  push: {
    value: App.getInstance().settings.pushNotification.isEnabled,
    onChange: (isChecked: boolean) => {
      if (isChecked) {
        App.getInstance()
          .settings.pushNotification.getPermission()
          .then(
            () => (App.getInstance().settings.pushNotification.isEnabled = true)
          )
          .catch(
            () =>
              (App.getInstance().settings.pushNotification.isEnabled = false)
          );
      } else {
        App.getInstance()
          .settings.pushNotification.getPermission()
          .then(
            () =>
              (App.getInstance().settings.pushNotification.isEnabled = false)
          );
      }
    },
  },
};
// TODO: при изменении менять в настройках
const SOUND_SETTING_ITEMS: SOUND_SETTING_ITEM_PROPS[] = [
  {
    name: "vibration",
    title: "enable vibration",
    getIsChecked: () => App.getInstance().settings.vibrate.isEnabled,
    icon: <MdVibration size={20} />,
    onChange: (isChecked: boolean) =>
      (cacheValues["vibration"].value = isChecked),
  },
  {
    name: "push",
    title: "enable push notification",
    getIsChecked: () => App.getInstance().settings.pushNotification.isEnabled,
    icon: <MdOutlineNotifications size={20} />,
    onChange: (isChecked: boolean) => (cacheValues["push"].value = isChecked),
  },
];

const ButtonSoundSettingItem: FC<SOUND_SETTING_ITEM_PROPS> = ({
  icon,
  title,
  getIsChecked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(getIsChecked());

  const onToggle = () => {
    setIsChecked((prev) => {
      const value = !prev;
      onChange(value);

      return value;
    });
  };

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" gap={2}>
        <Flex width={5} justifyContent="center">
          {icon}
        </Flex>
        <Text _firstLetter={{ textTransform: "uppercase" }} fontWeight="bold">
          {title}
        </Text>
      </Flex>

      <Switch.Root defaultChecked={getIsChecked()} onChange={onToggle}>
        <Switch.HiddenInput />
        <Switch.Control bg={isChecked ? "blue" : "blue.300"} />
      </Switch.Root>
    </Flex>
  );
};

const ButtonSoundControllerFooter: FC<{
  onCancel: () => void;
  onOk: () => void;
}> = ({ onCancel, onOk }) => (
  <Flex gap={4} width="100%">
    <Button
      flex={1}
      background="blue.200"
      size="xl"
      rounded="full"
      onClick={onCancel}
    >
      <Span textTransform="capitalize" color="blue">
        cancel
      </Span>
    </Button>
    <Button flex={1} background="blue" size="xl" rounded="full" onClick={onOk}>
      <Span textTransform="capitalize">ok</Span>
    </Button>
  </Flex>
);

export default function ButtonSoundController() {
  const [modal, openModal] = usePromiseLikeBottomSheetModal();

  const onClickHandler = () => {
    openModal({
      renderComponent: () => (
        <Flex direction="column" gap={4}>
          {SOUND_SETTING_ITEMS.map((item) => (
            <ButtonSoundSettingItem key={item.title} {...item} />
          ))}
        </Flex>
      ),
      renderFooter: (onResolve, onReject) => (
        <ButtonSoundControllerFooter
          onOk={onResolve}
          onCancel={() => {
            onReject(undefined);
          }}
        />
      ),
      modalProps: {
        title: (
          <Text textAlign="center" w="100%" textTransform="capitalize">
            sound settings
          </Text>
        ),
      },
    })
      .then(() => {
        console.log(cacheValues);
        Object.values(cacheValues).forEach(({ value, onChange }) => {
          onChange(value);
        });

        App.getInstance().saveSettings();
      })
      .catch(() => {
        console.log("zdec cancel");
      });
  };

  return (
    <>
      <Button size="xs" onClick={onClickHandler} variant="ghost">
        <AiFillSound />
      </Button>
      {modal}
    </>
  );
}
